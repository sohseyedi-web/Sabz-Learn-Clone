import './Comments.scss'

const Comments = () => {
  return (
    <section className='comments'>
        <div className="comments-container container">
            <h3 className='comments-container__title'>نظرات</h3>
            <form className="comments-container__form">
                <div className="comments-container__form-inputs">
                    <input type="text" placeholder='نام و نام خانوادگی'/>
                    <input type="email" placeholder='example@gmail.com' dir='ltr'/>
                </div>
                <textarea placeholder='پیام ...' className='comments-container__form-textarea'/>
                <button className='comments-container__form-btn'>ثبت نظر</button>
            </form>
        </div>
    </section>
  )
}

export default Comments