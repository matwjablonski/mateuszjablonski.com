import React, { useEffect, useState } from "react";
import request from "../helpers/request";

import Post from "../components/Post/Post";

const BlogPost = props => {
  const {
    match: { params }
  } = props;

  const [post, setPost] = useState(null);

  useEffect(() => {
    request.get(`post/slug/${params.slug}`).then(res => setPost(res.data));
  }, [params.slug]);

  return post ? <Post post={post} /> : null;
};

export default BlogPost;
