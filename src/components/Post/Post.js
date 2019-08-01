import React from "react";

import { PostTitle, PostExcerpt } from "./Post.style";
import PostCover from "./PostCover";
import FromMarkdown from "../FromMarkdown/FromMarkdown";

import { SimpleButton } from "../ui/SimpleButton";

const Post = ({ post }) => (
  <article>
    <PostTitle>{post.title}</PostTitle>
    <PostCover coverImage={post.coverImage} />
    <PostExcerpt>
      <FromMarkdown text={post.excerpt || ""} />
    </PostExcerpt>
    <SimpleButton to={"/"}>Continue reading</SimpleButton>
  </article>
);

export default Post;
