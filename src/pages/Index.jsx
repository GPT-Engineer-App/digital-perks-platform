import { Container, Text, VStack, Box, Heading, List, ListItem, ListIcon, IconButton, Image } from "@chakra-ui/react";
import { FaMobileAlt, FaWallet, FaChartLine, FaGamepad, FaBuilding, FaUsers, FaMoneyBillWave, FaCreditCard, FaCog, FaReceipt, FaBell } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Modern Digital Perks Card Platform
          </Heading>
          <Text fontSize="lg">Revolutionizing Employee Benefits with Convenience, Choice, and Flexibility</Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Core Functionalities
          </Heading>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FaMobileAlt} color="green.500" />
              User-Friendly Mobile App and Web Interface
            </ListItem>
            <ListItem>
              <ListIcon as={FaWallet} color="green.500" />
              Direct Vendor Integration
            </ListItem>
            <ListItem>
              <ListIcon as={FaChartLine} color="green.500" />
              Employer-Funded Wallets
            </ListItem>
            <ListItem>
              <ListIcon as={FaChartLine} color="green.500" />
              Real-Time Tracking
            </ListItem>
            <ListItem>
              <ListIcon as={FaCreditCard} color="green.500" />
              Bank Customization (Optional)
            </ListItem>
            <ListItem>
              <ListIcon as={FaGamepad} color="green.500" />
              Optional Gamification
            </ListItem>
          </List>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Benefits for Companies
          </Heading>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FaBuilding} color="blue.500" />
              Convenience and Efficiency
            </ListItem>
            <ListItem>
              <ListIcon as={FaMoneyBillWave} color="blue.500" />
              Reduced Costs
            </ListItem>
            <ListItem>
              <ListIcon as={FaChartLine} color="blue.500" />
              Real-Time Insights
            </ListItem>
            <ListItem>
              <ListIcon as={FaUsers} color="blue.500" />
              Increased Employee Engagement
            </ListItem>
            <ListItem>
              <ListIcon as={FaMoneyBillWave} color="blue.500" />
              Improved Cash Flow Management
            </ListItem>
          </List>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Benefits for Employees
          </Heading>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FaMobileAlt} color="purple.500" />
              Improved Convenience
            </ListItem>
            <ListItem>
              <ListIcon as={FaWallet} color="purple.500" />
              Wider Selection
            </ListItem>
            <ListItem>
              <ListIcon as={FaChartLine} color="purple.500" />
              Financial Management
            </ListItem>
            <ListItem>
              <ListIcon as={FaGamepad} color="purple.500" />
              Enhanced Experience
            </ListItem>
            <ListItem>
              <ListIcon as={FaMoneyBillWave} color="purple.500" />
              Prompt Reimbursements
            </ListItem>
          </List>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Additional Features
          </Heading>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FaCog} color="teal.500" />
              Customization for Each Company
            </ListItem>
            <ListItem>
              <ListIcon as={FaReceipt} color="teal.500" />
              Benefits and Perks Management
            </ListItem>
            <ListItem>
              <ListIcon as={FaReceipt} color="teal.500" />
              Expense Management
            </ListItem>
            <ListItem>
              <ListIcon as={FaCreditCard} color="teal.500" />
              Virtual Cards
            </ListItem>
            <ListItem>
              <ListIcon as={FaBell} color="teal.500" />
              Communication and Support
            </ListItem>
          </List>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Future Development Considerations
          </Heading>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FaChartLine} color="orange.500" />
              Scalability
            </ListItem>
            <ListItem>
              <ListIcon as={FaUsers} color="orange.500" />
              Accessibility
            </ListItem>
            <ListItem>
              <ListIcon as={FaMobileAlt} color="orange.500" />
              Multilingual Support
            </ListItem>
          </List>
        </Box>

        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={4}>
            Join the Digital Benefits Revolution!
          </Heading>
          <Text fontSize="lg">By implementing a digital perks card platform with integrated expense management functionalities, companies can create a more engaging and productive workforce, while improving employee cash flow through prompt reimbursements.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
