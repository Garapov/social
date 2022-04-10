
export default function ({ $fire, redirect }) {
  // If the user is not authenticated
  if (!$fire.auth.currentUser) {
    return redirect('/auth');
  }
}