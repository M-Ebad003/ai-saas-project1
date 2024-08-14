// "use client"

// import React, { useEffect } from 'react'
// import { useToast } from '../ui/use-toast'

// const PopToast = () => {
//     const {toast}= useToast()

//    useEffect(() => {
//       toast({
//             title: "Important Notice",
//             description: "You will have only 10 credits! Since it is in development mode",
//             duration: 6000,
//             className: 'success-toast',

//         })
//    }, [])

// }

// export default PopToast

"use client"

import React, { useEffect } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PopToast = () => {
        const showToastOnce = () => {
          // Check if the toast is already active
          if (!toast.isActive('unique-toast-id')) {
            toast.success('You have limited credits!.Check profile page for more details', {
              toastId: 'unique-toast-id', // Set a unique ID for this toast
            });
          }
        }
        useEffect(() => {
            showToastOnce()
        }, [])
    return (
       <div></div>
    )
}
export default PopToast
