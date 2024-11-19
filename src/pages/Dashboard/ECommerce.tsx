import React from 'react';

const Greetings: React.FC = () => {
  return (
    <>
      <div className="text-2xl font-bold mb-4">
        Welcome to the FreshFruit Dashboard!
      </div>
      <p className="text-lg text-gray-700">
        This dashboard allows you to:
      </p>
      <ul className="list-disc list-inside mt-2 text-gray-600">
        <li>Add new products</li>
        <li>View the product list</li>
        <li>Delete and recycle products</li>
        <li> View orders</li>
      </ul>
    </>
  );
};

export default Greetings;
