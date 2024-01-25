"use client"

import { useRef } from "react"

export default function Page() {
    const emailInputRef = useRef<HTMLInputElement>(null)
    const feedbackInputRef = useRef<HTMLTextAreaElement>(null)

    const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const enteredEmail = emailInputRef.current?.value
        const enteredFeedback = feedbackInputRef.current?.value
        const resp = await fetch("/api/feedback", {
            method: "POST",
            body: JSON.stringify({ email: enteredEmail, text: enteredFeedback }),
            headers: { "Content-Type": "application/json" }
        })
    }

    return (
        <>
            <h1>The Home Page</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="email">Your Email Address</label>
                    <input type="email" id="email" ref={emailInputRef} />
                </div>
                <div>
                    <label htmlFor="feedback">Your Feedback</label>
                    <textarea id="feedback" ref={feedbackInputRef} rows={5}></textarea>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </>
    )
}
