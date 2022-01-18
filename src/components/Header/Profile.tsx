import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  /* dados do usuário logado */
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Morgana Bagatini</Text>
        <Text color="gray.300" fontSize="small">
          morganabagatini@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Morgana" src="https://github.com/mbagatini.png" />
    </Flex>
  );
}
