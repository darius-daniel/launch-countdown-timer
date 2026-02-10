export default function LinkToSocial({
  href,
  iconSrc,
}: {
  href: string;
  iconSrc: string;
}) {
  return (
    <a href={href}>
      <img src={iconSrc} alt="" />
    </a>
  );
}
