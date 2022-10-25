import { BigInt } from "@graphprotocol/graph-ts"
import {
  Transfer,
  Birth,
} from "../generated/DataSourceWithContract/Contract"
import { ExampleEntity } from "../generated/schema"

// export function handleTransfer(event: Transfer): void {}
export function handleBirth(event: Birth): void {}
