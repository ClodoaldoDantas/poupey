CREATE TABLE `transactions` (
	`id` text PRIMARY KEY NOT NULL,
	`description` text NOT NULL,
	`amount_in_cents` integer NOT NULL,
	`type` text NOT NULL,
	`category` text NOT NULL,
	`payment_date` text NOT NULL
);
