/** Change these values to configure the application for your own use. **/

// Your smart contract address (available on the thirdweb dashboard)
// For existing collections: import your existing contracts on the dashboard: https://thirdweb.com/dashboard
//export const contractConst = "0x4Bc82B72CE4747f2232930AD08343AE6cAEF9e77";
export const contractConst = "0x0b042B1F72466d19552665a96FFdF7E7E39dcdAF";

// The name of the chain your contract is deployed to.
// Refer to README.md on how to specify the chain name.
export const chainConst = "base";

// It is IMPORTANT to provide your own API key to use the thirdweb SDK and infrastructure.
// Please ensure that you define the correct domain for your API key from the API settings page.
// You can get one for free at https://thirdweb.com/create-api-key
// Learn more here: https://blog.thirdweb.com/changelog/api-keys-to-access-thirdweb-infra
export const clientIdConst = import.meta.env.VITE_TEMPLATE_CLIENT_ID || "c18c0526e9331130bca42825f93bca03";

// Configure the primary color for buttons and other UI elements
export const primaryColorConst = "blue";

// Choose between "light" and "dark" mode
export const themeConst = "dark";

// Gasless relayer configuration options
export const relayerUrlConst = ""; // OpenZeppelin relayer URL
export const biconomyApiKeyConst = ""; // Biconomy API key
export const biconomyApiIdConst = ""; // Biconomy API ID
