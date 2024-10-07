import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import { useAppSelector } from "@/services/store/store";
import { formatAnyDate } from "@/utils";

const TableService = () => {
    const { services } = useAppSelector(state => state.services);
    return (
        <>
            <div className="my-6 flex flex-row justify-between items-center">
                <h2 className="font-bold text-xl">List Service Management</h2>
                <button className="border border-slate-600 p-2 rounded-lg text-white bg-green-600 font-bold">Create Service</button>

            </div>
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[150px]">Name</TableHead>
                        <TableHead className="w-[100px]">Price</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead className="text-right">Create At</TableHead>
                        <TableHead className="text-right">Update At</TableHead>
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {services && services.map(service => (
                        <TableRow key={service.id}>
                            <TableCell className="font-medium w-[40vh]">{service.name}</TableCell>
                            <TableCell className="w-[30vh]">{service.price ?? 0}</TableCell>
                            <TableCell>
                                {service.description
                                    ? (service.description.length > 30
                                        ? `${service.description.slice(0, 30)}...`
                                        : service.description)
                                    : "Empty"}
                            </TableCell>
                            <TableCell className="text-right">{formatAnyDate(service.createdAt)}</TableCell>
                            <TableCell className="text-right">{formatAnyDate(service.updatedAt)}</TableCell>
                            <TableCell className="text-right">
                                <button className="border border-slate-600 p-2 rounded-lg text-white bg-slate-800 font-bold">Edit</button>
                                <button className="border border-slate-600 p-2 rounded-lg text-white bg-red-600 font-bold ml-2">Delete</button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
}

export default TableService;