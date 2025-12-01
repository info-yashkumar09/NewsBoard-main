import Loader from "./Loader";

function Card({ data, loading, error }) {
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="w-full flex items-center justify-center py-16">
        <div className="text-center">
          <p className="text-red-600 font-semibold text-lg">⚠️ Error</p>
          <p className="text-slate-600 mt-2">{error}</p>
        </div>
      </div>
    );
  }

  if (!Array.isArray(data) || data.length === 0) {
    return null;
  }

  return (
    <section className="mt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((curItem, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group border border-slate-100"
          >
            <div className="overflow-hidden">
              <img
                src={curItem.urlToImage}
                alt={`Image for ${curItem.title}`}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5 flex flex-col gap-2">
              <span className="inline-block px-2 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded uppercase tracking-wide w-fit">
                {curItem.source?.name}
              </span>
              <h3 className="text-lg font-bold text-slate-800 leading-tight group-hover:text-blue-700 transition-colors duration-300">
                {curItem.title}
              </h3>
              <p className="text-sm text-slate-600 line-clamp-3">
                {curItem.description}
              </p>
              <div className="mt-2 text-xs text-slate-500 flex items-center gap-2"  >
                <span className="font-medium">By {curItem.author}</span>
                <span className="mx-1">&middot;</span>
                <span>{curItem.publishedAt}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Card;
