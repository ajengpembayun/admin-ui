function Card(props) {
    const { title, link = false, desc } = props;
  
    return (
      <>
        <div className="flex flex-col h-full">
  
          <div className="flex justify-between items-center mb-4">
            <div className="text-gray-03 font-medium">
              {title}
            </div>
  
            {link && (
              <div className="text-xs text-gray-03">
                View All
              </div>
            )}
          </div>
  
          <div className="flex-1 bg-white rounded-lg px-6 py-6 shadow">
            {desc}
          </div>
  
        </div>
      </>
    );
  }
  
  export default Card;