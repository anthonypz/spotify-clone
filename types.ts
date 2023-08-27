import Stripe from 'stripe';

export interface Song {
	id: string;
	user_id: string;
	author: string;
	title: string;
	song_path: string;
	image_path: string;
}

export interface UserDetails {
	id: string;
	first_name: string;
	last_name: string;
	full_name?: string;
	avatar_url?: string;
	billing_address?: Stripe.Address;
	payment_method?: Stripe.PaymentMethod[Stripe.PaymentMethod.Type];
}

export interface Product {
	id: string;
	active?: boolean;
	description?: string;
	image?: string;
	metadata?: Stripe.Metadata;
	name?: string;
}

export interface Price {
	id: string;
	active?: boolean;
	description?: string;
	unit_amount?: number;
	currency?: string;
	type?: Stripe.Price.Type;
	interval?: Stripe.Price.Recurring.Interval;
	interval_count?: number;
	trial_period_days?: number | null;
	metadata?: Stripe.Metadata;

	product_id?: string;
	products?: Product;
}

export interface ProductWithPrice extends Product {
	prices?: Price[];
}

export interface Subscription {
	id: string;
	cancel_at?: string;
	cancel_at_period_end?: boolean;
	canceled_at?: string;
	created: string;
	current_period_end: string;
	current_period_start: string;
	ended_at?: string;
	metadata?: Stripe.Metadata;
	quantity?: number;
	status?: Stripe.Subscription.Status;
	trial_end?: string;
	trial_start?: string;
	user_id: string;

	price_id?: string;
	prices?: Price;
}
