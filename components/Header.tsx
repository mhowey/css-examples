interface HeaderProps {
  title: string;
}

export default function Header(props: HeaderProps): React.ReactElement {
  const { title } = props;
  return (
    <div id="header">
      <h2>{title}</h2>
    </div>
  );
}
