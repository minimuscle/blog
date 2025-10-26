import { createFileRoute, useParams } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import type {WP_REST_API_Post} from 'wp-types'
import htmr from 'htmr';

export const Route = createFileRoute("/posts/$postId")({
  component: RouteComponent,
});

function RouteComponent() {
  const {postId} = useParams({ from: "/posts/$postId" });
  const [postData, setPostData] = useState<WP_REST_API_Post>();

  useEffect(() => {
    async function get() {
      const data = await fetch(
        `https://cms.joshandnathan.au/wp-json/wp/v2/posts/${postId}`
      );
      setPostData(await data.json());
    }
    get();
  }, [postId]);

  console.log(postData)

  return <div>
    <h1>{postData?.title.rendered}</h1>
    <div>{htmr(postData?.content.rendered ?? '')}</div>
    <div>{htmr(postData?.content.rendered ?? '')}</div>
    <div>{htmr(postData?.content.rendered ?? '')}</div>
  </div>;
}
