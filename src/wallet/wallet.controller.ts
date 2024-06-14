import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from "@nestjs/common";
import { WalletService } from "./wallet.service";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Wallet")
@Controller("users")
@UseGuards(JwtAuthGuard)
export class WalletController {
  constructor(private walletService: WalletService) {}

  @Get("wallets/:walletId")
  getWalletWithUser(@Param("walletId") walletId: string) {
    return this.walletService.getWalletWithUser(walletId);
  }

  // create wallet
  @Post(":userId/wallet")
  createWallet(@Param("userId", ParseIntPipe) userId: number) {
    return this.walletService.createWallet(userId);
  }
  //  get wallet by user id
  @Get(":userId/wallet")
  findWalletByUserId(@Param("userId", ParseIntPipe) userId: number) {
    return this.walletService.findWalletByUserId(userId);
  }
}
