import {
  createAuthenticatedClient,
  OpenPaymentsClientError,
  isFinalizedGrant
} from '@interledger/open-payments'

export async function getAuthenticatedClient({ walletAddressUrl, keyId, privateKey }: { walletAddressUrl: string, keyId: string, privateKey: string }) {
  return await createAuthenticatedClient({ walletAddressUrl, keyId, privateKey })
}

export async function getWalletAddress(client: any, url: string) {
  return await client.walletAddress.get({ url })
}

export async function requestGrant(client: any, url: string, access: any, interact?: any) {
  return await client.grant.request({ url }, { access_token: { access }, ...(interact && { interact }) })
}

export async function createIncomingPayment(client: any, resourceServer: string, accessToken: string, walletAddress: string, assetCode: string, assetScale: number, value: string) {
  return await client.incomingPayment.create(
    { url: resourceServer, accessToken },
    { walletAddress, incomingAmount: { assetCode, assetScale, value } }
  )
}

export async function createQuote(client: any, resourceServer: string, accessToken: string, walletAddress: string, receiver: string, method: string = 'ilp') {
  return await client.quote.create(
    { url: resourceServer, accessToken },
    { walletAddress, receiver, method }
  )
}

export async function continueGrant(client: any, uri: string, accessToken: string) {
  return await client.grant.continue({ url: uri, accessToken })
}

export async function createOutgoingPayment(client: any, resourceServer: string, accessToken: string, walletAddress: string, quoteId: string) {
  return await client.outgoingPayment.create(
    { url: resourceServer, accessToken },
    { walletAddress, quoteId }
  )
}

export { OpenPaymentsClientError, isFinalizedGrant }
