function PageHeader(headerInfo) {


  return (
    <div className="text-center bg-darkhero bg-center text-offwhite border-b-2 border-darkblue py-20 px-6">
      <h1 className="text-3xl md:text-5xl font-bold mt-0 mb-6 font-display">{headerInfo.name}</h1>
      <p className="text-xl md:text-3xl font-serif">{headerInfo.tagline}</p>
    </div>
  )

}

export default PageHeader;