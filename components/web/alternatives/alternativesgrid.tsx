const files = [
  {
    title: "Deck3",
    size: "Open Source Docsend alternative",
    source: "https://deck3.xyz/_static/meta-image.png",
    link: "/login",
  },
  {
    title: "Google Drive",
    size: "Document hosting platform",
    source: "https://assets.papermark.io/alterantives/google-drive.jpg",
    link: "/alternatives/google-drive",
  },
  {
    title: "Pitch",
    size: "Presentation creation platform",
    source: "https://assets.papermark.io/alterantives/pitch.webp",
    link: "/alternatives/pitch",
  },
  {
    title: "PandaDoc",
    size: "Optimization of agreements and workflows",
    source: "https://assets.papermark.io/alterantives/pandadoc.png",
    link: "/alternatives/pandadoc",
  },
  {
    title: "Digify",
    size: "Data Room creation software",
    source:
      "https://digify.com/wp-content/uploads/2024/01/Digify_Logo_Horizontal__big.png",
    link: "/alternatives/digify",
  },
  {
    title: "FirmRoom",
    size: "Data Room software",
    source:
      "https://i.vimeocdn.com/video/1405840219-c1ea8b44d9c0b03421084d45f3370b3ae1ae631fcbe77d2792610d51e0ea6d32-d_640?f=webp",
    link: "/alternatives/firmroom",
  },
  {
    title: "VisibleVC",
    size: "All in one fundraising platform",
    source:
      "https://cdn.sanity.io/images/mmb1hcvm/production/5e8920e8c2b43e1348ee7adbcb4f3697f608873e-1920x1080.png?w=1200&fm=webp",
    link: "/alternatives/visible-vc",
  },
  {
    title: "Box",
    size: "Document sharing and collaboration",
    source:
      "https://sm.pcmag.com/pcmag_au/review/b/box-for-bu/box-for-business-review_vhcf.jpg",
    link: "/alternatives/box",
  },
];

export default function Gridalternatives() {
  return (
    <div className="px-6 py-10 my-20 bg-gray-100 sm:px-8 sm:py-10 lg:px-20">
      <div className="px-6 py-12 pb-20 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 text-balance">
            Learn more about Docsend Alternatives in 2024
            <br />
          </h2>
          <p className="max-w-xl mx-auto mt-6 text-lg leading-8 text-gray-600">
            Papermark, PandaDoc and other Docsend alternatives to fit your
            business needs
          </p>
        </div>
      </div>
      <ul
        role="list"
        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
      >
        {files.map((file) => (
          <li key={file.source} className="relative">
            <a href={file.link} className="block focus:outline-none">
              <div className="block w-full overflow-hidden bg-gray-200 rounded-lg aspect-h-7 aspect-w-10 group focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                <img
                  src={file.source}
                  alt=""
                  className="object-cover pointer-events-none group-hover:opacity-75"
                />
                <span className="sr-only">View details for {file.title}</span>
              </div>
              <p className="block mt-2 text-sm font-medium text-gray-900 truncate pointer-events-none">
                {file.title}
              </p>
              <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                {file.size}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
