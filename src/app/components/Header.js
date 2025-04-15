const Header = () => {
  const headerClass = "bg-gray-300"
  return (
    <header className={headerClass}>
      <a href="#">
        <h1 id="logo" className="clear_text">
          岡田製作所
        </h1>
      </a>
      <h2>お客様の求める形に。</h2>
      <p>CREATE THE SHAPE THAT THE CUSTOMER DESIRES</p>
    </header>
  )
}
export default Header
