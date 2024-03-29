import { SignIn, SignInWithMetamaskButton } from "@clerk/nextjs";

const SignInPage = () => {
  return ( 
    <SignInWithMetamaskButton><SignIn /></SignInWithMetamaskButton>
    
   );
}
 
export default SignInPage;
