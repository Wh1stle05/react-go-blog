// 博客API服务
const API_BASE_URL = 'http://localhost:5001/api';

// 获取博客列表
export const getBlogs = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/blogs`);
    const data = await response.json();
    
    if (data.success) {
      return data.data;
    } else {
      throw new Error(data.message || '获取博客列表失败');
    }
  } catch (error) {
    console.error('获取博客列表错误:', error);
    throw error;
  }
};

// 获取博客详情
export const getBlogById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/blogs/${id}`);
    const data = await response.json();
    
    if (data.success) {
      return data.data;
    } else {
      throw new Error(data.message || '获取博客详情失败');
    }
  } catch (error) {
    console.error('获取博客详情错误:', error);
    throw error;
  }
};