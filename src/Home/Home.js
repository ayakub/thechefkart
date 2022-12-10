import React, { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';


const Home = () => {
    const [lists, setLists] = useState(null);
    useEffect(() => {
        fetch('list.json')
            .then(res => res.json())
            .then(data => setLists(data))
    }, [])
    console.log(lists);



    return (
        <div>

            <Table className="table table-compact w-full">
                <Thead className=" text-orange-600">
                    <Tr>
                        <Th>Id</Th>
                        <Th>first_name</Th>
                        <Th>last_name

                        </Th>
                        <Th>email</Th>
                        <Th>gender</Th>
                        <Th>ip_address</Th>
                        <Th>airport code</Th>
                        <Th>time</Th>
                        <Th>status</Th>
                        <Th>mobile</Th>
                        <Th>area</Th>
                        <Th>show</Th>
                        <Th>edit</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {/* data map */}
                    {
                        lists?.map((list, i) => <Tr>
                            <Th>{i + 1}</Th>
                            <Td>{list.first_name}</Td>
                            <Td>{list.last_name}</Td>
                            <Td>{list.email}</Td>
                            <Td>{list.gender}</Td>
                            <Td>{list.ip_address}</Td>
                            <Td>{list.airport_code}</Td>
                            <Td>{list.time}</Td>
                            <Td style={{
                                backgroundColor: list.status ? 'green' : 'red',
                            }}
                            ><span className='text-white'>{list.status === true ? 'true' : 'false'}</span></Td>
                            <Td>{list.mobile}</Td>
                            <Td>{list.area}</Td>
                            <Td>{list.show}</Td>
                            <Td>{list.edit}</Td>
                        </Tr>)
                    }






                </Tbody>
            </Table>
        </div>
    );
};

export default Home;