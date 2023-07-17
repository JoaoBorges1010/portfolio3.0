import Card from './Card'

const ProjectGallery = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-10">
          <div className=" my-10 grid grid-cols-1 md:grid-cols-2">
            <div className="col-span-1 border border-red-900 rounded-md">
              <Card />
            </div>
            <div className="col-span-1 border border-red-900 rounded-md">
              <Card />
            </div>
            <div className="col-span-1 border border-red-900 rounded-md">
              <Card />
            </div>
            <div className="col-span-1 border border-red-900 rounded-md">
              <Card />
            </div>
            <div className="col-span-1 border border-red-900 rounded-md">
              <Card />
            </div>
            <div className="col-span-1 border border-red-900 rounded-md">
              <Card />
            </div>
            <div className="col-span-1 border border-red-900 rounded-md">
              <Card />
            </div>
          </div>
        </div>
  )
}

export default ProjectGallery
