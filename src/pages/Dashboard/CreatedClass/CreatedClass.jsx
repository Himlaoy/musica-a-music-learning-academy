import React from 'react';
import { ToastContainer } from 'react-toastify';
import GetClass from '../../../api/GetClass';
import CreatedClassTab from './CreatedClassTab';
import { useQuery } from 'react-query';
import useAuth from '../../../Hook/useAuth';
import useAxiosSecure from '../../../Hook/useAxiosSecure';
import axios from 'axios';
import AllCreatedClass from '../../../api/AllCreatedClass';

const CreatedClass = () => {

    // const [AllClass] = GetClass()
    // const {loading ,user } = useAuth()
    // // const [axiosSecure ] = useAxiosSecure()

    // const {data: AllClasses = []} = useQuery({
    //     queryKey: ['AllClasses', user?.email],
    //     enabled: !loading,
    //     queryFn: async ()=>{
    //         const res = await axios(`https://music-instrument-learning-server-himlaoy.vercel.app/class/instructor/${user?.email}`)
    //         return res.dada
    //     }


    // })

    const {AllClasses} = AllCreatedClass()



    console.log('createdClass', AllClasses)

    return (
        <div className="overflow-x-auto">
            <ToastContainer></ToastContainer>
            <table className="table">
                {/* head */}
                <thead>
                    <tr className=''>
                        <th>
                            #
                        </th>
                        <th>Picture</th>
                        <th>class Name</th>
                        <th>Instructor name</th>
                        <th>Instructor email</th>
                        <th>Available seats</th>
                        <th>Feedback </th>
                        <th>Status </th>
                        <th>Action </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        AllClasses?.map((cls, index) => <CreatedClassTab key={cls._id} AllClass={cls} index={index}></CreatedClassTab>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default CreatedClass;