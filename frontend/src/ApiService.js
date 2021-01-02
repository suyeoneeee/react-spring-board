import axios from "axios";

const POST_API_BASE_URL = "http://localhost:8080/posts";

class ApiService {
    fetchPosts() {
        return axios.get(POST_API_BASE_URL);
    }

    fetchPostByID(postID) {
        return axios.get(POST_API_BASE_URL + "/" + postID);
    }
    deletePost(postID) {
        return axios.delete(POST_API_BASE_URL + "/" + postID);
    }
    addPost(post) {
        return axios.post(POST_API_BASE_URL, post);
    }
    updatePost(post) {
        return axios.post(POST_API_BASE_URL, post.id, post);
    }
}

export default new ApiService();
