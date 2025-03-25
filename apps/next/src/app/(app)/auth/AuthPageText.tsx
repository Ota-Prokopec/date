import { Column } from '@repo/ui/components/common/Column'
import { Text } from '@repo/ui/components/common/Text'

export const AuthPageText = () => {
  return (
    <Column className="gap-2">
      <Text className="font-bold text-6xl">Date app</Text>
      <Column className="mt-4 ml-2">
        <Text className="font-bold text-2x ">The connection pocket friend for introverts</Text>
        <Text className="" boldStyle>
          We are happy to see you here
        </Text>
      </Column>
    </Column>
  )
}
