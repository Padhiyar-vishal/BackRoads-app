function SocialLink({ href, icon, classType}) {
  return (
    <li>
    <a
      href={href}
      target="_blank"
      className={classType}
      rel="noreferrer"
      >
      <i className={icon} />
    </a>
  </li>
  )
}
export default SocialLink