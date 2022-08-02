import * as React from "react";

interface MusicTopicProps {
  children?: any;
}

export default function MusicTopic({ children }: MusicTopicProps) {
  return <div className="grid grid-cols-4 gap-x-[18px]">{children}</div>;
}
