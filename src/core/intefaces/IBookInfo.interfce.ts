type TagType = { title: string; id: number };

export interface IBookInfo {
  title: string;
  author: string;
  tags: TagType[];
  cover: string;
}
