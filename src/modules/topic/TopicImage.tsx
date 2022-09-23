import * as React from "react";
import { useSelector } from "react-redux";

export interface ITopicImageProps {}

export default function TopicImage(props: ITopicImageProps) {
  const { dataTopic } = useSelector((state: any) => state.music);
  if (!dataTopic?.topic) return null;
  const { coverImageURL } = dataTopic?.topic;

  return (
    <div className="mb-6">
      <img src={coverImageURL} alt="img-topic" />
    </div>
  );
}
