<div className="px-4 py-6 max-w-4xl mx-auto">
{[...Array(3)].map((_, index) => (
  <div key={index} className="bg-white p-6 rounded-lg shadow-md mb-6">
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
      <Skeleton variant="circular" width={96} height={96} />
      <div className="flex-1">
        <Skeleton variant="text" width="60%" height={24} />
        <Skeleton variant="text" width="40%" height={20} />
        <Skeleton variant="text" width="50%" height={20} />
      </div>
    </div>
    <Skeleton variant="text" width="80%" height={24} />
    <Skeleton variant="text" width="100%" height={60} />
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
      <Skeleton variant="text" width="60%" height={20} />
      <Skeleton variant="text" width="60%" height={20} />
      <Skeleton variant="text" width="60%" height={20} />
    </div>
    <div className="flex items-center justify-between text-sm">
      <Skeleton variant="rectangular" width={100} height={36} />
      <Skeleton variant="rectangular" width={60} height={36} />
    </div>
  </div>
))}
</div>