export const verifyEmail = (emailURL: string) => {
	return `<div
  style="
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Verdana; sans-serif;
    padding: 1rem 0;
  "
>
  <div
    style="
      background: #f8f8f8;
      width: 90%;
      max-width: 25rem;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 0.5rem;
      box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.05);
    "
  >
    <h2 style="font-weight: 500">Email Verification</h2>
    <p style="text-align: center; font-size: 0.8rem">
      Welcome! Thank you for taking a moment to protect your account by
      verifying your email address!
    </p>
    <a
      href="${emailURL}"
      style="
        background: rgb(64, 56, 208);
        color: rgb(249, 249, 251);
        text-decoration: unset;
        padding: 0.5rem 2rem;
        font-size: 1.2rem;
        border-radius: 0.25rem;
      "
      >Click to verify</a
    >
    <p style="font-size: 0.8rem">or, copy and pase this link:</p>
    <a
      style="font-size: 0.8rem; width: 100%; overflow-wrap: break-word"
      href="${emailURL}"
      >${emailURL}</a
    >
  </div>
</div>
`;
};
