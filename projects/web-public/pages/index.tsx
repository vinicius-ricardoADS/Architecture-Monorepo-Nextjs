import { sum } from '@architecture/utils/math/sum';
import { Text } from '@architecture/design-system/components/Text/index';

export default function HomeScreen() {
    return (
        <main>
            <Text tag='h1'>Home</Text>
            <Text tag='p'>Importando módulo local: @public/utils/math/sum sum(2,2): {sum(2, 2)}</Text>
        </main>
    );
}
