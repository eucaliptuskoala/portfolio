export default function Footer() {
  const footer_message = "Ivan Bodnar. Thanks for reading <3"
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} {footer_message}</p>
    </footer>
  );
}
