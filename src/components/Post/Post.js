import React from "react";

import { PostTitle, PostContent } from "./Post.style";
import PostCover from "./PostCover";
import FromMarkdown from "../FromMarkdown/FromMarkdown";

const Post = ({ post }) => (
  <article>
    <PostTitle>{post.title}</PostTitle>
    <PostCover coverImage={post.coverImage} />
    <PostContent>
      <FromMarkdown text={post.content || ""} />
    </PostContent>
  </article>
);

export default Post;
