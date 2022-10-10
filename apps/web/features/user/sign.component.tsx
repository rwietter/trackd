import {
  Box,
  Tabs,
  TabsList,
  TabsTrigger,
} from './styles';
import { SignIn } from './signin';
import { SignUp } from './signup';

function SignForm() {
  return (
    <Box>
      <Tabs defaultValue="tab1">
        <TabsList aria-label="Manage your account">
          <TabsTrigger value="tab1">Cadastrar</TabsTrigger>
          <TabsTrigger value="tab2">Login</TabsTrigger>
        </TabsList>
        <SignUp />
        <SignIn />
      </Tabs>
    </Box>
  );
}

export { SignForm };
