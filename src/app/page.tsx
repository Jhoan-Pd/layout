import Image from "next/image";

export default function Home() {
  return (
    <main className="p-6 bg-gray-50 min-h-screen flex justify-center">
      {/* Contenedor principal más angosto */}
      <div className="w-full max-w-5xl">
        {/* Fila 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tarjeta principal */}
          <div className="lg:col-span-2 rounded-2xl shadow-xl bg-white p-4 flex gap-4">
            {/* Imagen lámpara */}
            <div className="w-1/3 flex-shrink-0">
              <div className="aspect-[3/3] relative rounded-xl overflow-hidden">
                <Image
                  src="/lampara.jpg"
                  alt="Lamp"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Contenido */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h1 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 leading-tight">
                  Green plants are going to Extinct about 500 times faster than
                  they should, Study finds
                </h1>
                <p className="text-gray-600 text-sm mb-4">
                  If you are the sort of person who just can not keep a plant
                  alive, you are not alone according to a new study published
                  June 10 in the journal Nature.
                </p>
              </div>

              {/* Autor */}
              <div className="flex items-center gap-3">
                <Image
                  src="/foto_perfil1.jpg"
                  alt="Author"
                  width={32}
                  height={32}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Alexander Parkinson
                  </p>
                  <p className="text-xs text-gray-500">Jun 20, 2019</p>
                </div>
              </div>
            </div>
          </div>

          {/* Barra lateral */}
          <div className="rounded-2xl shadow-xl bg-white p-4 space-y-2">
            {[
              { name: "Global", icon: "/global.png" },
              { name: "Business", icon: "/bussines.png" },
              { name: "Entertainment", icon: "/play.png" },
              { name: "Sports", icon: "/sport.png" },
              { name: "Health", icon: "/Healt.png" }
            ].map((item, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer ${
                  item.name === "Sports"
                    ? "bg-blue-50 border-l-4 border-blue-500"
                    : "hover:bg-gray-100"
                }`}
              >
                <div className="w-5 h-5 relative flex-shrink-0">
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={20}
                    height={20}
                    className={`object-contain ${
                      item.name === "Sports" ? "brightness-0 invert opacity-70" : "opacity-60"
                    }`}
                  />
                </div>
                <span
                  className={`${
                    item.name === "Sports"
                      ? "text-blue-600 font-medium"
                      : "text-gray-700"
                  }`}
                >
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Fila 2 y 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
          {/* Columna 1: Café ocupa dos filas */}
          <div className="lg:row-span-2 rounded-2xl shadow-xl bg-white p-4">
            <div className="aspect-square relative rounded-xl overflow-hidden mb-4">
              <Image
                src="/tasaCafe.jpg"
                alt="Coffee"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-bold text-gray-900 mb-3 leading-tight text-sm">
              How to make the perfect morning coffee, according to the Science
            </h3>
            <div className="flex items-center gap-2">
              <Image
                src="/foto_perfil2.jpg"
                alt="Tara Gibson"
                width={24}
                height={24}
                className="rounded-full object-cover"
              />
              <div className="flex flex-col">
                <p className="text-xs text-gray-800 font-medium">Tara Gibson</p>
                <p className="text-xs text-gray-400">Jul 13, 2019</p>
              </div>
            </div>
          </div>

          {/* Columna 2 */}
          <div className="flex flex-col gap-6">
            {/* Search */}
            <div className="rounded-2xl shadow-xl bg-white p-4">
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search for articles"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center hover:bg-blue-600">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-wrap gap-3">
                {["#Politics", "#Science", "#Movies", "#Technology"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="text-sm text-gray-500 cursor-pointer hover:text-blue-600"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Perfil - CORREGIDO (botón Follow ya no se sale) */}
            <div className="rounded-2xl shadow-xl bg-white p-6">
              <div className="flex gap-6 items-center">
                {/* Imagen perfil */}
                <div className="w-20 h-20 relative rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
                  <Image
                    src="/alex.jpg"
                    alt="Alex Morrison"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Contenido */}
                <div className="flex-1 min-w-0">
                  {/* Nombre y título */}
                  <h3 className="text-lg font-bold text-gray-900 truncate">Alex Morrison</h3>
                  <p className="text-gray-500 text-sm mb-4">Senior Journalist</p>

                  {/* Estadísticas (ajustadas) */}
                  <div className="flex items-center gap-6 mb-3">
                    <div className="text-center w-16">
                      <p className="text-xs text-gray-500">Articles</p>
                      <p className="text-lg font-bold text-gray-900">34</p>
                    </div>
                    <div className="text-center w-16">
                      <p className="text-xs text-gray-500">Followers</p>
                      <p className="text-lg font-bold text-gray-900">980</p>
                    </div>
                    <div className="text-center w-16">
                      <p className="text-xs text-gray-500">Rating</p>
                      <p className="text-lg font-bold text-gray-900">8.9</p>
                    </div>
                  </div>

                  {/* Botones: Chat a la izquierda, Follow a la derecha (ml-auto) */}
                  <div className="flex items-center gap-3">
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm font-medium">
                      Chat
                    </button>
                    <button className="w-24 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm font-medium ml-auto">
                      Follow
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Columna 3 */}
          <div className="flex flex-col gap-6">
            {/* Video */}
            <div className="rounded-2xl shadow-2xl bg-white p-6">
              <div className="flex gap-4 items-start">
                <div className="w-24 h-27 relative rounded-xl overflow-hidden flex-shrink-0 bg-blue-100">
                  <Image
                    src="/edificio.jpg"
                    alt="Building"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between h-20">
                  <div className="flex items-start gap-2 mb-3">
                    <div className="w-6 h-6 bg-blue-300 rounded-full flex items-center justify-center flex-shrink-0 mt-2">
                      <svg className="w-3 h-3 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M 5v14l11-7z"/>
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-900 text-sm leading-tight line-clamp-2">
                      An Inspiring Short Film About Life and Dreams
                    </h4>
                  </div>
                  <div className="flex items-center gap-1 mt-auto">
                    <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <p className="text-xs text-gray-500">80,989</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Flechas */}
            <div className="flex gap-3 justify-center">
              <button className="w-12 h-12 flex items-center justify-center rounded-full shadow-lg bg-white hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-12 h-12 flex items-center justify-center rounded-full shadow-lg bg-white hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Tags */}
            <div className="rounded-2xl shadow-xl bg-white p-4 flex flex-wrap gap-3">
              <span className="px-3 py-1 rounded-lg bg-gray-100 text-gray-600 text-sm cursor-pointer hover:bg-blue-100 hover:text-blue-600">
                Donald Trump
              </span>
              <span className="px-3 py-1 rounded-lg bg-gray-100 text-gray-600 text-sm cursor-pointer hover:bg-blue-100 hover:text-blue-600">
                USA
              </span>
              <span className="px-3 py-1 rounded-lg bg-gray-100 text-gray-600 text-sm cursor-pointer hover:bg-blue-100 hover:text-blue-600">
                Politics
              </span>
              <span className="px-3 py-1 rounded-lg border border-blue-400 text-blue-500 text-sm cursor-pointer bg-white">
                2020
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
