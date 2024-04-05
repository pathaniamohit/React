import axios from 'axios';

const fetchUser = async (userId) => {
  try {
    const response = await axios.get(`/api/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw new Error('Failed to fetch user data');
  }
}
