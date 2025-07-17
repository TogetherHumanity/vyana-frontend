function Chat() {
  return (
    <div className="flex flex-col flex-grow p-4 overflow-y-auto bg-gray-800">
      <div className="text-lg font-semibold mb-4">Welcome to Vyana AI</div>
      <div className="flex-grow bg-gray-700 rounded-lg p-4">
        <p>This is your chat window.</p>
      </div>
    </div>
  )
}

export default Chat