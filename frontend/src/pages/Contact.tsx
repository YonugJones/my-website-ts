const Contact = () => {
  return (
    <div className='m-5 min-h-[calc(100vh-10rem)] flex flex-col rounded bg-blue-100 p-5'>
      <div className='mb-4 text-center'>
        <h2 className='text-4xl font-semibold mb-2'>Drop a line!</h2>
        <p>Got a question? Looking to hire?</p>
        <p>Let me know below!</p>
      </div>

      <form className='flex flex-col flex-grow bg-white rounded p-6 shadow space-y-4'>
        <div>
          <label htmlFor='reason' className='block font-medium mb-1'>
            What can I help you with?
          </label>
          <select
            name='reason'
            id='reason'
            className='w-full border border-gray-300 rounded p-2'
          >
            <option value='website'>Need a website</option>
            <option value='question'>Have a question</option>
            <option value='other'>Other</option>
          </select>
        </div>

        <div>
          <label htmlFor='name' className='block font-medium mb-1'>
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            className='w-full border border-gray-300 rounded p-2'
          />
        </div>

        <div>
          <label htmlFor='email' className='block font-medium mb-1'>
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            className='w-full border border-gray-300 rounded p-2'
          />
        </div>

        <div>
          <label htmlFor='message' className='block font-medium mb-1'>
            Message
          </label>
          <textarea
            id='message'
            name='message'
            rows={5}
            className='w-full border border-gray-300 rounded p-2 resize-none'
          ></textarea>
        </div>

        <button
          type='submit'
          className='self-start bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors'
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact
