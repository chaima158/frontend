export default function Footer({
  name,
  email,
  website,
  phone,
  bankAccount,
  bankName,
}) {
  return (
    <>
      <footer className="footer border-t-2 border-gray-300 pt-5">
        <ul className="flex flex-wrap items-center justify-center">
          <li>
            <span className="font-bold">Nom Société:</span> {name}
          </li>
          <li>
            <span className="font-bold">Email:</span> {email}
          </li>
          <li>
            <span className="font-bold">Numéro:</span> {phone}
          </li>
          <li>
            <span className="font-bold">Bank:</span> {bankName}
          </li>
          <li>
            <span className="font-bold">Titulaire de compte:</span> {name}
          </li>
          <li>
            <span className="font-bold">numéro de compte:</span> {bankAccount}
          </li>
          <li>
          {" "}
            <a href={website} target="_blank" rel="noopenner noreferrer">
              {website}
            </a>
          </li>
        </ul>
      </footer>
    </>
  )
}
