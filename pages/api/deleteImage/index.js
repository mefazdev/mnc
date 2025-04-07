import cloudinary from '../../../utils/cloudinary';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  try {
    const { publicId } = req.body;

    if (!publicId) {
      return res.status(400).json({ error: 'Missing publicId' });
    }

    const result = await cloudinary.uploader.destroy(publicId);

    if (result.result !== 'ok') {
      return res.status(400).json({ error: 'Failed to delete image' });
    }

    return res.status(200).json({ message: 'Image deleted successfully' });
  } catch (error) {
    console.error('Delete error:', error);
    return res.status(500).json({ error: error.message || 'Deletion failed' });
  }
}
