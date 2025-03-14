import { Activity } from 'lucide-react';

const ActivityGraph = () => {
    return (
        <div className="mt-8 rounded-xl bg-white p-6">
            <div className="mb-4 flex items-center gap-4">
                <Activity className="text-2xl text-gray-600" />
                <h3 className="text-xl font-semibold text-gray-800">
                    Atividade Recente
                </h3>
            </div>

            <table className="min-w-full table-auto border-collapse">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800">
                            Atividade
                        </th>
                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800">
                            Data
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b">
                        <td className="px-4 py-2 text-sm text-gray-600">
                            Compras realizadas
                        </td>
                        <td className="px-4 py-2 text-sm text-gray-600">
                            10 de Março, 2025
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="px-4 py-2 text-sm text-gray-600">
                            Pedido #12345 - Produto X
                        </td>
                        <td className="px-4 py-2 text-sm text-gray-600">
                            15 de Fevereiro, 2025
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="px-4 py-2 text-sm text-gray-600">
                            Pedido #12346 - Produto Y
                        </td>
                        <td className="px-4 py-2 text-sm text-gray-600">
                            12 de Fevereiro, 2025
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ActivityGraph;
