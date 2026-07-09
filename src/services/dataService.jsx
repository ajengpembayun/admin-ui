import axios from "axios";

const API_URL = "https://jwt-auth-eight-neon.vercel.app";

// ==================== GOAL ====================

export const goalService = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(`${API_URL}/goals`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.data[0];
  } catch (error) {
    throw {
      status: error.response?.status,
      msg: error.response?.data?.msg,
    };
  }
};

// ==================== EXPENSE ====================

export const expenseService = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(`${API_URL}/expenses`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (Array.isArray(response.data)) {
      return response.data;
    }

    return response.data.data || [];
  } catch (error) {
    throw {
      status: error.response?.status,
      msg: error.response?.data?.msg,
    };
  }
};

// ==================== BILL ====================

export const billService = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(`${API_URL}/bills`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("BILL RESPONSE :", response.data);

    if (Array.isArray(response.data)) {
      return response.data;
    }

    if (Array.isArray(response.data.data)) {
      return response.data.data;
    }

    return [];
  } catch (error) {
    console.log(error.response);

    throw {
      status: error.response?.status,
      msg: error.response?.data?.msg,
    };
  }
};