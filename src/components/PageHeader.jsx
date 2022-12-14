function PageHeader(headerInfo) {


  return (
    <div class="text-center bg-gray-50 text-gray-800 py-20 px-6">
      <h1 class="text-3xl md:text-5xl font-bold mt-0 mb-6">{headerInfo.name}</h1>
      <p class="text-lg md:text-xl">{headerInfo.tagline}</p>
    </div>
  )

}

export default PageHeader;