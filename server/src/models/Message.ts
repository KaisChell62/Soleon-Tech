import mongoose, { Document, Schema } from 'mongoose';

export interface IMessage extends Document {
  name: string;
  email: string;
  country: string;
  subject: string;
  message: string;
  ip?: string;
  createdAt: Date;
}

const MessageSchema: Schema = new Schema({
  name: { 
    type: String, 
    required: true, 
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters'],
    minlength: [2, 'Name must be at least 2 characters']
  },
  email: { 
    type: String, 
    required: true, 
    trim: true, 
    lowercase: true,
    maxlength: [254, 'Email cannot exceed 254 characters'],
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email format']
  },
  country: {
    type: String,
    required: true,
    trim: true,
    maxlength: [100, 'Country cannot exceed 100 characters'],
    minlength: [2, 'Country must be at least 2 characters']
  },
  subject: { 
    type: String, 
    required: true, 
    trim: true,
    maxlength: [200, 'Subject cannot exceed 200 characters'],
    minlength: [3, 'Subject must be at least 3 characters']
  },
  message: { 
    type: String, 
    required: true,
    maxlength: [5000, 'Message cannot exceed 5000 characters'],
    minlength: [10, 'Message must be at least 10 characters']
  },
  ip: {
    type: String,
    select: false // Never return IP in queries by default
  }
}, {
  timestamps: true
});

// Index for potential spam analysis (IP + time)
MessageSchema.index({ ip: 1, createdAt: -1 });

export default mongoose.model<IMessage>('Message', MessageSchema);
