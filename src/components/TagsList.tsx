import { Tag } from "../types/Tag";

type TagListProps = {
  tags: Tag[];
}

export const TagsList = ({ tags }: TagListProps) => (
  <ol>
    {tags.map(({ name, count }: Tag) => (
      <li key={name}>
        {`Name: ${name}, posts count: ${count}`}
      </li>
    ))}
  </ol>
);
